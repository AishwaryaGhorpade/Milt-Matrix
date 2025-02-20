'use client';
import { useUser, useSession } from '@clerk/nextjs';
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  const { user } = useUser();
  // The `useSession()` hook will be used to get the Clerk `session` object
	const { session } = useSession()
  return (
    <div className='my-20 ml-44'>
      <h2 className="truncate text-2xl font-medium tracking-tight mb-2">
      Hi {user?.firstName || ''}! Welcome to MILT </h2>
    <div className=" flex flex-wrap gap-5 mt-12">
    <Card className="w-1/3">
  <CardHeader>
    <CardDescription>TOTAL MILTONIANS</CardDescription>
    <CardTitle>3000</CardTitle>
  </CardHeader>
</Card>
<Card className="w-1/3">
  <CardHeader>
    <CardDescription>TOTAL COMMITTEES</CardDescription>
    <CardTitle>50</CardTitle>
  </CardHeader>
</Card>
<Card className="w-1/3">
  <CardHeader>
    <CardDescription>PROGRESS</CardDescription>
    <CardTitle>96.8%</CardTitle>
  </CardHeader>
</Card>
<Card className="w-1/3">
  <CardHeader>
    <CardDescription>EVENTS</CardDescription>
    <CardTitle>280</CardTitle>
  </CardHeader>
</Card>
</div>
</div>
  );
}
