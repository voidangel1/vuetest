<template>
    <div class="footer">
        {{word}}
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                word: '',
                wordList: [
                    '遥遥领先',
                    '华为，中华有为',
                    
                ],
            }
        },
        methods: {
            getWord() {
                this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
            },
        },
        watch: {
            $route() {
                this.getWord();
            }
        },
    }
</script>

<style scoped>
    .footer {
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        background-color: #064b3e;
        height: 50px;
        color: #fff;
    }
</style>