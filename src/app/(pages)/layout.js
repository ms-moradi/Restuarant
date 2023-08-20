import MiniBanner from "@/component/miniBanner/miniBanner"

export default function PagesLayout({children}){
    return(
        <section>
            <MiniBanner/>
            {children}
        </section>
    )
}