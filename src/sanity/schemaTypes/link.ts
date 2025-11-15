import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'document',
    fields: [
        defineField({ name: 'url', title: 'URL', type: 'url' }),
        defineField({ name: 'slug', title: 'Slug', type: 'slug' }),
    ],
    preview: {
        select: {
            title: 'url',
            subtitle: 'slug.current',
        },
    },
})