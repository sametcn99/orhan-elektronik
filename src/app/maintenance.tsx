import { AlertTriangle } from "lucide-react"

export default function MaintenancePage({ message }: { message?: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-amber-500" />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Bakım Çalışması</h1>
        <p className="text-slate-600 mb-6">
          {message || "Sitemiz şu anda bakım modundadır. Lütfen daha sonra tekrar ziyaret edin."}
        </p>
        <div className="text-sm text-slate-500">
          <p>Orhan Elektrik Elektronik</p>
        </div>
      </div>
    </div>
  )
}

