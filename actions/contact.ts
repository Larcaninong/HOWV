"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    // Extrair dados do formulário
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || null
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validar dados
    if (!name || !email || !subject || !message) {
      return { success: false, message: "Por favor, preencha todos os campos obrigatórios." }
    }

    // Inserir no Supabase
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        phone,
        subject,
        message,
        read: false,
      })
      .select()

    if (error) {
      console.error("Erro ao enviar mensagem de contato:", error)
      return { success: false, message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente." }
    }

    // Revalidar a página para atualizar os dados
    revalidatePath("/contato")

    return {
      success: true,
      message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
    }
  } catch (error) {
    console.error("Erro ao processar mensagem de contato:", error)
    return { success: false, message: "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente." }
  }
}
