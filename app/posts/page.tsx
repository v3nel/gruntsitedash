import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter
} from "@/components/ui/card";

export default function PodcastsPage() {
    return (
        <div className="flex flex-col px-4  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Nombre de vues
                        </CardTitle>
                        <CardDescription>
                            Le nombre total de vues générés par les posts postés sur les différentes plateformes pendant les 7 derniers jours.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Nombre de posts
                        </CardTitle>
                        <CardDescription>
                            Le nombre de posts publiés sur les réseaux sociaux.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}