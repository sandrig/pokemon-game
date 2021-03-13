import s from './style.module.css'

export const Layout = ({ title, urlBg = 'none' , colorBg = 'transparent', children }) => {
  const sectionStyle = {
    backgroundImage: `url(${urlBg}`,
    backgroundColor: colorBg,
  }

  return (
    <section className={s.root} style={sectionStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`} >
            {children}
          </div>
        </article>
      </div>
    </section>
  )
}
