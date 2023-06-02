const pprss = 'https://anchor.fm/s/4acf5ec8/podcast/rss'

fetch(pprss)
    .then(response => response.text())
    .then(xmlString => {
        const parser = new DOMParser()
        const dom = parser.parseFromString(xmlString, 'application/xml')
        return dom
    })
    .then(dom => {
        const items = dom.quesrySelectorAll('item')
        console.log(items[0])

        const ul = document.querySelector('ul#episodes')

        items.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item.querySelector('title').textContent
            ul.append(li)
        })
    })