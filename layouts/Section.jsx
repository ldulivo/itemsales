import styleSection from '../styles/section.module.css';

export default function Section({children, white=false, title=false} ) {
  return (
    <section className={styleSection.section}>
        <div className={ white ? styleSection.section_container : styleSection.none}>
            {
                (title) ? <header>{title}</header> : null
            }
            <main>
                {children}
            </main>
        </div>
    </section>
  )
}
