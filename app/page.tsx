import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to the existing index.html content
  redirect('/index.html')
}