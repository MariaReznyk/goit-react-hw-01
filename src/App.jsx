import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./data/userData.json";
import friends from "./data/friends.json";


function App() {
    return (<Section>
        <Container>
            <Profile name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}/>
        </Container>

        <Container>
            <FriendList friends={friends}/>
        </Container>
    </Section>);
}

export default App;
