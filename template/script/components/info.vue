<template>
    <div :id="$style.app__info">
        <p :class="$style.app__info__p">{{p}}</p>
        <span :class="$style.app__info__intro">{{intro}}
            <a :class="$style.app__info__intro__link" href="https://med3li.github.io/INIT-pug" target="_blank">{{link}}
            </a>
        </span>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            p: 'The nice and clean front-end template for building fast, robust, and adaptable {{type}}.',
            intro: 'Visit the',
            link: 'official website'
        }
    }
}
</script>
<style lang="scss" module>
.app {
    &__info {
        &__p {
            color: crimson;
            font-weight: 600;
            color: #474747;
            font-size: 25px;
            margin-top: 25px;
        }

        &__intro {
            display: inherit;
            font-size: 20px;


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