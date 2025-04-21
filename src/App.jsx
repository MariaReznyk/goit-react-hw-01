import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import userData from "./data/userData.json";
import Profile from "./components/Profile/Profile";

function App() {
    return (<Section>
        <Container>
        <Profile name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
        </Container>
    </Section>);
}

export default App;
