class FollowToggle {
    
    constructor(el) {
        debugger
        this.$el = $(el);
        this.userId = this.$el.data("id");
        this.followState = this.$el.data("initial-follow-state")
        this.render();
    }

    render(){
        if (this.followState === "unfollowed") {
            this.$el.innerText = "unfollowed"
        } else {
            this.$el.innerText = "followed"
        }
    }
}

module.exports = FollowToggle;