import { useState } from 'react'
import styles from './Form.module.css'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import useNewsStore from '../store/newsStore';

function Form () {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        titulo: '',
        subtitulo: '',
        conteudo: ''
    });
    const addNews = useNewsStore(state => state.addNews)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch ('http://localhost:3001/enviar', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                const newNoticia = await response.json()
                addNews(newNoticia)
            } else {
                console.error('Erro ao criar e enviar a noticia')
            }
        navigate('/')
        }catch(error){
            console.error('erro ao criar e enviar a noticia', error)
        }  
    }

    return(
    <div className={styles.container}>
        <form className={styles.subtitulo} onSubmit={handleSubmit}>
             <div>
             <label  htmlFor="titulo">Titulo:</label>
                <input 
                    type="text" 
                    placeholder='digite seu titulo' 
                    name='titulo' 
                    id='titulo'
                    value={formData.titulo}
                    onChange={handleChange}
                    required
                />
             </div>

             <div>
             <label htmlFor="subtitulo">subtitulo:</label>
                <input 
                    type="text" 
                    placeholder='digite seu subtitulo' 
                    name='subtitulo' 
                    id='subtitulo'
                    value={formData.subtitulo}
                    onChange={handleChange}
                    required
                />
             </div>

             <div>
             <label htmlFor="conteudo">Conteudo:</label>
                <input 
                    type="text" 
                    placeholder='digite o conteudo' 
                    name='conteudo' 
                    id='conteudo'
                    value={formData.conteudo}
                    onChange={handleChange}
                    required
                />
             </div>

             <div>
                <Button className={styles.botao} type='submit' value='Enviar'/>
                
             </div>
        </form>
    </div>)
}

export default Form