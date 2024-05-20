import { useToast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'
import isWebview from 'is-ua-webview'

export const useAuth = () => {
  const { toast } = useToast()

  async function signInToMyApp() {
    if (isWebview(window.navigator.userAgent)) {
      toast({
        title: 'Navegador não suportado',
        description: 'Abra esta página em um outro navegador para fazer login',
        variant: 'destructive'
      })
      return
    }
    await signIn('google')
  }
  return { signInToMyApp }
}
