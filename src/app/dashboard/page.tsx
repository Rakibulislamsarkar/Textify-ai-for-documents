import Dashboard from '@/components/Dashboard'
import { getAuth } from '@clerk/nextjs/server' // Clerk's server-side auth helper
import { redirect } from 'next/navigation'

const Page = async () => {
  // Get user session via Clerk
  const { userId } = getAuth() // Clerk returns userId if authenticated

  if (!userId) redirect('/sign-in?redirect_url=/dashboard') // Redirect to sign-in page if not authenticated

  // Fetch the user from your database using Clerk's userId
  const dbUser = await db.user.findFirst({
    where: {
      id: userId
    }
  })

  if (!dbUser) redirect('/sign-in?redirect_url=/dashboard') // Redirect if user not found in the database

  // Fetch subscription plan details (using Stripe or any other provider)
  const subscriptionPlan = await getUserSubscriptionPlan()

  // Render the dashboard component with the subscription plan data
  return <Dashboard  />
}

export default Page
