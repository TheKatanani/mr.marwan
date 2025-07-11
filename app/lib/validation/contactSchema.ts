import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("البريد غير صالح"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "رقم الهاتف غير صالح (مثال: +971501234567)")
    .optional()
    .or(z.literal("")), // allow empty value  inquiryType: z.string().optional(),
  subject: z.string().min(1, "الموضوع مطلوب"),
  message: z.string().min(1, "الرسالة مطلوبة"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 