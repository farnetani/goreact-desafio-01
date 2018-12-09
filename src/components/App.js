import React, { Component } from 'react'

import Header from './Header'
import Post from './Post'

export default class App extends Component {
	state = {
		posts: [
			{
				id: 1,
				name: 'Arlei Ferreira Farnetani Junior',
				avatar: 'https://avatars0.githubusercontent.com/u/564503?s=400&v=4',
				time: 'há 1 min',
				body: 'Programando em REACT através dos cursos da Rocketseat...'
			},
			{
				id: 2,
				name: 'Rocketseat',
				avatar: 'https://avatars3.githubusercontent.com/u/10868181?s=400&v=4',
				time: 'há 10 min',
				body: 'Testando componente em React.'
			}
		]
	}

	render () {
		const { posts } = this.state
		return (
			<div>
				<Header />
				<div className='post-container'>{posts && posts.map(post => <Post key={post.id} data={post} />)}</div>
			</div>
		)
	}
}
