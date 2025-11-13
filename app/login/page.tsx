"use client";

import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle
} from "@/components/ui/card";
import {
    Input
} from "@/components/ui/input";
import {
    Label
} from "@/components/ui/label";
import {
    Button
} from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";

const loginScheme = z.object({
    email: z.email(),
    password: z.string().min(6, "Le mot de passe doit faire plus de 6 caractères"),
});

export default function Login() {
    const router = useRouter();

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const result = loginScheme.safeParse({ email, password });

        if (!result.success) {
            console.error("Validation errors:", result.error.flatten());
            return;
        }

        document.cookie = `authToken=valid-token; path=/; max-age=3600; SameSite=Strict`;

        console.log("Validated data:", result.data);
        router.replace("/");
    };

    return (
        <div className="min-h-screen flex flex-col gap-8 items-center justify-center">
            <div>
                <Image src="/logo/grunt-logo-dark.svg" alt="Logo" width={210} height={55} className="block dark:hidden" />
                <Image src="/logo/grunt-logo-light.svg" alt="Logo" width={210} height={55} className="hidden dark:block" />
            </div>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Connectez vous pour accéder au dashboard admin</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSumbit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Mot de Passe</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                />
                            </div>
                            <Button className="w-full" type="submit">Se connecter</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}