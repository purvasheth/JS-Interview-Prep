const { nanoid } = require('nanoid')

function Comment(author, message) {
  this.id = nanoid()
  this.author = author
  this.message = message
  this.replies = []
}

function CommentTree() {
  this.first = new Comment(null, null)

  this.traverseTree = function (callback) {
    function recursiveTraversal(root, callback) {
      if (root) {
        callback(root)
        root.replies.forEach((reply) => {
          recursiveTraversal(reply, callback)
        })
      }
    }
    this.first.replies.forEach((reply) => {
      recursiveTraversal(reply, callback)
    })
  }

  this.searchComment = function (commentId) {
    let comment
    this.traverseTree((node) => {
      if (node.id === commentId) {
        comment = node
      }
    })
    return comment
  }

  this.addComment = function (author, message, parentId = null) {
    const newComment = new Comment(author, message)
    if (!parentId) {
      this.first.replies.push(newComment)
    } else {
      const parent = this.searchComment(parentId)
      parent.replies.push(newComment)
    }
    return newComment.id
  }

  this.printTree = function () {
    this.traverseTree(({ author, message }) => {
      console.log(`${author}: ${message}`)
    })
  }
}

const redditComments = new CommentTree()
const firstId = redditComments.addComment('Isha', 'Nice Pic!')
const secondId = redditComments.addComment('Chavi', 'Looking pretty')
const thirdId = redditComments.addComment(
  'Purva',
  'Mast dikhri! kaha ghum rahi hai?'
)
const followUpFirstId = redditComments.addComment('OG', 'Thanks!', firstId)
const followUpSecondId = redditComments.addComment(
  'OG',
  'Thanks! It is your dress.',
  secondId
)
const secondFollowUpSecondId = redditComments.addComment(
  'Chavi',
  'Sadly looks better on you :(',
  followUpSecondId
)
const followupThirdId = redditComments.addComment(
  'OG',
  'Thanks! this place is near Lonavala',
  thirdId
)

redditComments.printTree()
