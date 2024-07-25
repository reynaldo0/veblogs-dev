import styles from '@/app/Blog/BlogPage.module.css'
import { CardList } from '@/components/CardList/CardList'
import { Menu } from '@/components/Menu/Menu'

const BlogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Halaman Edukasi</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage