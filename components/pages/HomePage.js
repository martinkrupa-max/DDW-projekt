//komponent sluziaci ako stranka Home
const HomePage = {
    template: `
    <div>
        <h1>Home</h1>
        <p>This is the home page of our web application</p>
        <pre>path: {{$route.fullPath}}</pre>
    </div>
    `
}

export default HomePage;