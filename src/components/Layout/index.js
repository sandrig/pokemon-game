import s from './style.module.css'

export const Layout = ({ title, descr, urlBg = 'none' , colorBg = 'transparent' }) => {
  const styles = {
    backgroundImage: `url(${urlBg}`,
    backgroundColor: colorBg,
  }

  return (
    <section className={s.root} style={styles}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {title && <h3>{title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`} >
            {descr && <p>{descr}</p>}
          </div>
        </article>
      </div>
    </section>
  )
}
