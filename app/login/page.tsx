import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardAction,
    CardFooter,
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
import { Separator } from "@/components/ui/separator";

export default function Login() {
    
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
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Mot de Passe</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit">Se connecter</Button>
                </CardFooter>
            </Card>
        </div>
    )
}