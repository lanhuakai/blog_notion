import React from 'react'
import CONFIG_APPLE_IOS_HEXO from '../config_apple_ios_hexo'

/**
 * 跳转到评论区
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToCommentButton = () => {
  if (!CONFIG_APPLE_IOS_HEXO.WIDGET_TO_COMMENT) {
    return <></>
  }
  function navToComment() {
    const commentElement = document.getElementById('comment')
    if (commentElement) {
      commentElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  return (
    <div
      className="flex space-x-1 items-center justify-center transform hover:scale-105 duration-200 w-7 h-7 text-center"
      onClick={navToComment}
    >
      <i className="fas fa-comment text-xs" />
    </div>
  )
}

export default JumpToCommentButton
