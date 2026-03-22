//komponent sluziaci ako stranka About
const AboutPage = {
    template: `
    <div>
        <h1>About</h1>
        <p>There shoud be some basic information about web application.</p>
        <!--pristupenie k aktualnej route cez globalnu premennú $route-->
        <pre>path: {{$route.fullPath}}</pre>
    </div>
    `
}

export default AboutPage;