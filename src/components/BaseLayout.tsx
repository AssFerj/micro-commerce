import BaseHeader from "./BaseHeader"
import Footer from "./Footer"

export default function BaseLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <BaseHeader />
            {children}
            <Footer />
        </>
    )
}