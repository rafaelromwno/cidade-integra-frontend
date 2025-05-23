import React from "react"
import { Link } from "react-router-dom"
import { Shield, AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const AccessDeniedPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center">
            <div className="relative">
              <Shield className="h-20 w-20 text-azul" />
              <div className="absolute top-0 right-0">
                <AlertTriangle className="h-8 w-8 text-vermelho" />
              </div>
            </div>
          </div>
          
          <h1 className="mt-6 text-3xl font-bold text-azul">Acesso Negado</h1>
          
          <p className="mt-4 text-gray-600">
            Você não tem permissão para acessar esta página. Por favor, verifique suas credenciais ou entre em contato com o administrador.
          </p>
          
          <div className="mt-8 space-y-4">
          
            <Button asChild variant="outline" className="w-full">
              <Link to="/" className="flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para página inicial
              </Link>
            </Button>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AccessDeniedPage