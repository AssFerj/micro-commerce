import BaseHeader from "./BaseHeader"

export default function BaseLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <BaseHeader />
            {children}
        </>
    )
}