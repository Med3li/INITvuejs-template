<template>
    <div :id="$style.app__blog">
        <span :class="$style.app__blog__intro">{{intro}}
            <a :class="$style.app__blog__intro__link" href="https://med3li.github.io/INIT-pug/blog.html" target="_blank">{{link}}</a>
        </span>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            intro: 'Visit the',
            link: 'official blog'
        }
    }
}
</script>
<style lang="scss" module>
.app {
    &__blog {
        &__intro {
            display: inherit;
            font-size: 20px;
            margin-top: 20px;
            &__link {
                transition: all .2s linear;
                color: #d32e2d;;
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