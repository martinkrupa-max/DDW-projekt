let filterBar = {
    props: ["certificates", "filters", "updateFilters", "resetFilters"],

    template: `
    <div class="filter-bar">
        <input
            type="text"
            placeholder="Search movie..."
            :value="filters.search"
            @input="handleSearch"
        >

        <select :value="filters.certificate" @change="handleCertificate">
            <option value="all">All certificates</option>
            <option
                v-for="certificate in certificates"
                :key="certificate"
                :value="certificate">
                {{ certificate }}
            </option>
        </select>

        <select :value="filters.stars" @change="handleStars">
            <option value="0">All ratings</option>
            <option value="1">1★ and more</option>
            <option value="2">2★ and more</option>
            <option value="3">3★ and more</option>
            <option value="4">4★ and more</option>
            <option value="5">5★ only</option>
        </select>

        <select :value="filters.sortBy" @change="handleSort">
            <option value="default">Default order</option>
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
            <option value="price-asc">Price low-high</option>
            <option value="price-desc">Price high-low</option>
            <option value="year-asc">Oldest first</option>
            <option value="year-desc">Newest first</option>
        </select>

        <button @click="resetFilters()">Reset</button>
    </div>
    `,

    methods: {
        handleSearch(event) {
            this.updateFilters({
                ...this.filters,
                search: event.target.value
            })
        },

        handleCertificate(event) {
            this.updateFilters({
                ...this.filters,
                certificate: event.target.value
            })
        },

        handleStars(event) {
            this.updateFilters({
                ...this.filters,
                stars: event.target.value
            })
        },

        handleSort(event) {
            this.updateFilters({
                ...this.filters,
                sortBy: event.target.value
            })
        }
    }
}

export default filterBar