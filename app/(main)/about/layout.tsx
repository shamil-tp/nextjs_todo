import styles from './about.module.css'
export const metadata = {
    title:'todo | about',
    description:"this is the todo about section"
}
export default function AboutLayout({children}:{children: React.ReactNode}){
    return (
        <section id={styles.about__section}>
            {children}
        </section>
    )
}