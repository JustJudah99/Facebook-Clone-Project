import Footer from '../../components/Footer'
import LoginForm from '../../components/LoginForm'
import './styles.css'

const Home = () => {
  return (
    <div className="home__wrapper">
      <section className="home__section">
        <LoginForm />
      </section>
      <Footer />
    </div>
  )
}

export default Home
