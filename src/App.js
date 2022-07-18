import React from "react";
import "./App.css"
import Header from "./componets/Header";
import BlogEntries from "./componets/BlogEntries";
import AboutCard from "./componets/AboutCard";
import Posts from "./componets/Posts";
import Tags from "./componets/Tags";
import Footer from "./componets/Footer";

const MyBlog ={
    blog:[
        {img:'https://www.w3schools.com/w3images/woods.jpg',title:'TITLE HEADING',data:'April 7, 2014',
        text:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.' +
            ' Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.' +
            ' Praesent tincidunt sed' +
            'tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'},

        {img:'https://www.w3schools.com/w3images/bridge.jpg',title:'BLOG ENTRY',data:'April 2, 2014',
        text:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.' +
            ' Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.' +
            ' Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida' +
            ' diam non fringilla.'}
    ],

    posts: [
        {img:'https://www.w3schools.com/w3images/workshop.jpg',title:'Lorem',text:'Sed mattis nunc'},
        {img:'https://www.w3schools.com/w3images/gondol.jpg',title:'Ipsum',text:'Praes tinci sed'},
        {img:'https://www.w3schools.com/w3images/skies.jpg',title:'Dorum',text:'Ultricies congue'},
        {img:'https://www.w3schools.com/w3images/rock.jpg',title:'Mingsum',text:'Lorem ipsum dipsum'}
    ],

}


const divStyle = {
    'max-width':'1400px'
};
function App() {
    return (
        <div className="w3-light-grey center">
            <div className="w3-content divStyle">
                <Header className="w3-container w3-center w3-padding-32"/>
                <div className="w3-row">
                    <div className="w3-col l8 s12">
                        <BlogEntries blog={MyBlog.blog}/>
                    </div>

                    <div className="w3-col l4">
                        <AboutCard/>
                        <Posts className="post" posts={MyBlog.posts}/>
                        <Tags/>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    );
}

export default App;
