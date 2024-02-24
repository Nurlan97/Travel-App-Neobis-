import React from 'react'
import mapMarker from '../../images/TourDetailsPage/u_map-marker.svg'
import user1 from '../../images/TourDetailsPage/user1.jpeg'
import user2 from '../../images/TourDetailsPage/user2.jpeg'

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
        <div>
            <div className="tourDetails__img-container">
                <img src="" alt="" className="tourDetails__img" />
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
                            {users.map((user, index) => {
                                <div className="tourDetails__reviews_comment">
                                    <img src={user.userImg} alt="" className="tourDetails__reviews_comment_userImg" />
                                    <p className="tourDetails__reviews_comment_userName">
                                        {user}
                                    </p>
                                    <div className="tourDetails__reviews_comment_userComment">
                                        {user.userComment}
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default TourDetails
