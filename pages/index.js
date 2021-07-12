import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';

function ProfileSideBar(propriedades){
  return (
    <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style= {{ borderRadius: '8px' }} />
   </Box>
  )
}

export default function Home() {
  const githubUser= 'mayumisiano';
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'rafaballerini', 'peas', 'marcobrunodev',
'felipefialho']
  
  return(
    <>
    <AlurakutMenu />
    <MainGrid>    
    <div className="profileArea" style= {{ gridArea: 'profileArea'}}>  
      <ProfileSideBar githubUser={githubUser}/>
    </div>     

    <div className ="welcomeArea" style= {{ gridArea: 'welcomeArea'}}>
      <Box>
      <h1 className ="title">
      Bem vindo
      </h1>

      <OrkutNostalgicIconSet/>
      </Box>
    </div>

     

    <div className ="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className= 'smallTitle'>
        Pessoas da Comunidade   
        </h2>   
        <ul>
        {pessoasFavoritas.map((itemAtual) => {
            return (
              <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
              </li>
              
            )
          })}
         </ul>
      <Box>
      Comunidade
      </Box>     
      </ProfileRelationsBoxWrapper>
    </div>
      </MainGrid>
    </>         
    )
}
