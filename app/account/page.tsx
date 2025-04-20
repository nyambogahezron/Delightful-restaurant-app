import { Container } from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"

export default function AccountPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        <Separator className="mb-6" />
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <p className="text-gray-500 mb-6">
            This page is under construction. Account management features will be available soon.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600">
              If you need assistance with your account, please visit our contact page.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}