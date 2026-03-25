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

        <div class="filter-group">
            <p>Certificates</p>
            <label
                v-for="certificate in certificates"
                :key="certificate"
                class="checkbox-item"
            >
                <input
                    type="checkbox"
                    :value="certificate"
                    :checked="filters.certificates.includes(certificate)"
                    @change="handleCertificate($event, certificate)"
                >
                {{ certificate }}
            </label>
        </div>

        <div class="filter-group">
            <p>Rating</p>
            <label
                v-for="rating in ['1', '2', '3', '4', '5']"
                :key="rating"
                class="checkbox-item"
            >
                <input
                    type="checkbox"
                    :checked="filters.stars === rating"
                    @change="handleStars(rating)"
                >
                {{ rating }}★
            </label>
        </div>

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

        handleCertificate(event, certificate) {
            let newCertificates = [...this.filters.certificates]

            if (event.target.checked) {
                newCertificates.push(certificate)
            } else {
                newCertificates = newCertificates.filter(item => item !== certificate)
            }

            this.updateFilters({
                ...this.filters,
                certificates: newCertificates
            })
        },

        handleStars(rating) {
            const newRating = this.filters.stars === rating ? "" : rating

            this.updateFilters({
                ...this.filters,
                stars: newRating
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