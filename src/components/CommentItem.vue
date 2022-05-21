<template>
    <div class="comment">
        <p>
            {{ comment.name}}
            <span
                v-if="comment.subComment && comment.subComment.length"
                @click="showCommentDetail = !showCommentDetail"
            >
                [...]
            </span>
        </p>
        <p>{{ comment.content }}</p>
        <p @click="showCommentAdd = !showCommentAdd">回复</p>
        <CommentAdd
            v-if="showCommentAdd"
            :supId="comment.id"
            @handleCommentAdd="closeCommentAdd"
        />
        <CommentList
            v-show="showCommentDetail"
            v-if="comment.subComment && comment.subComment.length"
            :comments="comment.subComment"
        />
    </div>
</template>

<script>
import CommentAdd from "./CommentAdd";
const CommentList = () => import("./CommentList"); 
export default {
    name: "CommentItem",
    components: {
        CommentAdd,
        CommentList,
    },
    data() {
        return {
            showCommentAdd: false,
            showCommentDetail: true,
        };
    },
    props: {
        comment: {
            type: Object,
            default: () => {},
        },
    },
    methods: {
        showCommentAddFun() {
            this.showCommentAdd = true;
        },
        closeCommentAdd() {
            this.showCommentAdd = false;
        },
    },
    mounted() {},
};
</script>

