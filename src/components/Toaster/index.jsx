import { Toaster } from "sonner";


export function ToasterAlert() {
  return (
    <Toaster position="top-center" richColors toastOptions={{ style: { padding: '20px', } }} />
  )
}