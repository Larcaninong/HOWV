"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function submitAdoptionApplication(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    // Extrair dados do formulário
    const petId = formData.get("pet_id") as string
    const applicantName = formData.get("applicant_name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const housingType = formData.get("housing_type") as string
    const hasYard = formData.get("has_yard") === "yes"
    const hasOtherPets = formData.get("has_other_pets") === "yes"
    const otherPetsInfo = formData.get("other_pets_info") as string
    const familyMembers = Number.parseInt(formData.get("family_members") as string)
    const motivation = formData.get("motivation") as string

    // Validar dados
    if (!petId || !applicantName || !email || !phone || !address || !motivation) {
      return { success: false, message: "Por favor, preencha todos os campos obrigatórios." }
    }

    // Inserir no Supabase
    const { data, error } = await supabase
      .from("adoption_applications")
      .insert({
        pet_id: petId,
        applicant_name: applicantName,
        email,
        phone,
        address,
        housing_type: housingType,
        has_yard: hasYard,
        has_other_pets: hasOtherPets,
        other_pets_info: otherPetsInfo,
        family_members: familyMembers,
        motivation,
        status: "pending",
      })
      .select()

    if (error) {
      console.error("Erro ao enviar solicitação de adoção:", error)
      return { success: false, message: "Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente." }
    }

    // Atualizar o status do pet para "pending"
    await supabase.from("pets").update({ status: "pending" }).eq("id", petId)

    // Revalidar a página para atualizar os dados
    revalidatePath(`/adocao/${petId}`)

    return {
      success: true,
      message: "Sua solicitação de adoção foi enviada com sucesso! Entraremos em contato em breve.",
    }
  } catch (error) {
    console.error("Erro ao processar solicitação de adoção:", error)
    return { success: false, message: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente." }
  }
}
