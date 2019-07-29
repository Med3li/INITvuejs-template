<template>
    <div :id="$style.app__user">
        <span :class="$style.app__user__intro">{{intro}}
            <a :class="$style.app__user__intro__link" href="https://github.com/Med3li/INITpug" target="_blank">{{link}}</a>
        </span>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            intro: 'Check out the',
            link: 'github repository'
        }
    }
}
</script>
<style lang="scss" module>
.app {
    &__user {
        &__intro {
            display: inherit;
            font-size: 20px;
            margin-top: 20px;
            &__link {
                transition: all .2s linear;
                color: #d32e2d;
                &:hover,
                &:focus {
                    text-decoration: none;
                    border-bottom: 3px solid #337ab7;
                    padding-bottom: 2px;
                }
            }
        }
    }
}
</style>