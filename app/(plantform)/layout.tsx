import { ClerkProvider } from "@clerk/nextjs";
const PlantformLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    );
}

export default PlantformLayout;