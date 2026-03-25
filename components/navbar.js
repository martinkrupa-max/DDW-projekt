let navbar = {
    template: `
    <nav class="navbar">
        <div class="navbar-brand">
            <span class="navbar-logo">🎬</span>
            <span class="navbar-title">MovieZone</span>
        </div>

        <ul class="navbar-links">
            <li><router-link to="/" active-class="active">Home</router-link></li>
            <li><router-link to="/favorites" active-class="active">Fav Movies</router-link></li>
            <li><router-link to="/add" active-class="active">Add new</router-link></li>
        </ul>
    </nav>
    `
}

export default navbar