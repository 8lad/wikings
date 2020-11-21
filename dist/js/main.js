@import 'vars';
@import 'global';
@import 'fonts';
// start header
.header { &
    ::after {
        content: " ";
        height: 70 px;
        bottom: 0;
        width: 100 % ;
        left: 0;
        right: 0;
        position: absolute;
        transform: rotate(180 deg);
        background: linear - gradient(180 deg, #0E0E0E 0%, rgba(17, 17, 17, 0.850295) 16.53%, rgba(32, 31, 33, 0) 100%);

    }

    position: relative;

    height: 100vh;

    background-size: cover;

    background-position: center 50px;

    background-repeat: no-repeat;

    text-align: center;

    .menu__list {

        list-style: none;

        display: flex;

        justify-content: center;

        padding: 50px 0 58px;

        background: linear-gradient(180deg, # 111213 0 % , #111213 43.62%, rgba(32, 31, 33, 0) 86.33%);

        &-item {

            padding: 0 13px;

        }

        &-link {

            font-size: 36px;

            line-height: 42px;

            transition: all .4s;

        }

        &-link:hover {

            color: $blue;

            text-decoration: underline;

        }

        &-link.active {

            color: $blue;

            text-decoration: underline;

        }

    }

}



.logo {

    padding-top: 178px;

}



// end header

// start about

.about {

    &__inner {

        display: flex;

    }

    &__info {

        width: 375px;

        margin-right: 50px;

        flex: none;

        &-item {

            margin-bottom: 25px;

            color: $someText;

            span {

                display: block;

            }

        }

    }

    &__text {

        p {

            margin-bottom: 25px;

        }

    }

}



// end about

// start video

.video {

    background-repeat: no-repeat;

    height: 100vh;

    background-position: center center;

    background-size: cover;

    text-align: right;

    &__text {

        @include robotoLight;

        color: $blue;

        font-size: 72px;

        line-height: 84px;

        padding-top: 444px;

        margin-bottom: 40px;

        span {

            display: block;

            padding-right: 285px;

        }

    }

    &__btn {

        padding-left: 112px;

        position: relative;

        margin-right: 230px;

    }

    &__btn::before {

        content: '';

        width: 100px;

        height: 100px;

        left: 0;

        top: -40px;

        position: absolute;

        background-image: url(../images/youtube.svg);

    }

}



// end video

// start seasons

.seasons {

    &__inner {

        display: grid;

        grid-template-columns: 1fr 1fr 1fr;

        grid-gap: 100px 75px;

        counter-reset: number;

    }

    &__item {

        width: 350px;

        height: 250px;

        background-position: center center;

        background-repeat: no-repeat;

        background-size: cover;

        position: relative;

        display: flex;

        justify-content: center;

        align-items: center;

    }

    &__item:hover &__link {

        opacity: 1;

    }

    &__item::after {

        content: '';

        transition: all .4s;

    }

    &__item:hover::after {

        position: absolute;

        left: 0;

        top: 0;

        bottom: 0;

        right: 0;

        background: rgba(14, 14, 14, 0.8);

    }

    &__item::before {

        content: '0' counter(number);

        counter-increment: number;

        position: absolute;

        font-weight: bold;

        font-size: 96px;

        line-height: 112px;

        color: $accent;

        left: 0;

        top: -72px;

        z-index: -1;

    }

    &__link {

        font-size: 36px;

        line-height: 42px;

        padding: 12px 78px 11px;

        background-color: $bg;

        opacity: 0;

        transition: all .4s;

        z-index: 2;

    }

}



// end seasons

// start heroes

.heroes {

    &__inner {

        display: flex;

        justify-content: space-between;

    }

}



// end heroes

@import 'media';