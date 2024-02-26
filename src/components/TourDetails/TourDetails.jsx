import React from 'react'
import './TourDetails.scss'
import mapMarker from '../../images/TourDetailsPage/u_map-marker.svg'
import user1 from '../../images/TourDetailsPage/user1.jpeg'
import user2 from '../../images/TourDetailsPage/user2.webp'
import bg_img from '../../images/TourDetailsPage/tourDetailsPage_main-img.png'

const TourDetails = () => {
    // const user = ['Asan', 'Ainura'];
    // const userComments = ['That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat', 'That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat']
    // const userImgs = [user1, user2]

    const users = [
        {
            userName: 'Asan',
            userImg: user1,
            userComment: 'That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat',
        },
        {
            userName: 'Ainura',
            userImg: user2,
            userComment: 'That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat',
        }
    ]
    return (
        <div className='tourDetails'>
            {/* <div className="tourDetails__img-container">
                <img src={bg_img} alt="" className="tourDetails__img" />
            </div> */}
            <div 
            className="tourDetails__img" 
            style={{backgroundImage: `url(${bg_img})`}}
            >
              Nurlan
            </div>

            <div className="tourDetails__info_container">
            
                <div className="container">
                    <h1 className="tourDetails__title">
                        Mount Fuji
                    </h1>
                    <div className="tourDetails__location__info">
                        <img src={mapMarker} alt="" className="tourDetails__map-marker" />
                        <p className="tourDetails__location">Honshu, Japan</p>
                    </div>
                    <div className="tourDetails__description">
                        <h2 className="tourDetails__description_title">
                            Description
                        </h2>
                        <p className="tourDetails__description_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.
                        </p>
                    </div>
                    <div className="tourDetails__reviews">
                        <h2 className="tourDetails__reviews_title">
                            Reviews
                        </h2>
                        <div className="tourDetails__reviews_comments-container">
                            {users.map((user, index) => (
                                <>
                                    <div className="tourDetails__reviews_comment" key={index}>
                                        {/* {console.log(user)} */}
                                        <img src={user.userImg} alt="logo" className="tourDetails__reviews_comment_userImg" />
                                        <p className="tourDetails__reviews_comment_userName">
                                            {user.userName}
                                        </p>
                                    </div>
                                    <div className="tourDetails__reviews_comment_userComment">
                                        {user.userComment}
                                    </div>
                                </>
                            ))}
                        </div>

                    </div>

                    <button className='tourDetails__button'>Book now</button>

                </div>

            </div>
        </div>
    )
}

export default TourDetails
