<script lang="ts">
	import { CircleUser, Ellipsis, Heart, Send, MessageCircle,Bookmark } from "lucide-svelte";
	import Separator from "./ui/separator/separator.svelte";

</script>
<div>
    <a href="/" class=' mb-3 flex items-center gap-3'>
        <CircleUser/>
        <div>
            <p class="font-medium text-sm ">Greg Dilella</p>
            <p class='text-xs text-muted-foreground'>gregdilella@gmail.com</p>
        </div>
        <Ellipsis class='ml-auto w-fit' />
    </a>

    <img src="" class="h-[585px] w-full rounded bg-gray-100" alt="" />
    <div class ='my-2 flex items-center gap-5'>
        <Heart/>
        <MessageCircle />
        <Send/>
        <Bookmark class='ml-auto'/>
    </div>
    <p class="mb-0 text-sm font-medium">100,000 likes</p>
    <p class="mb-0 text-sm font-medium">Greg: <span class="font-light">this is the caption</span></p>
    <button class="mb-0 text-sm capitalize text-muted-foreground" >view all 20 comments</button>
    <input type='text' class ="mb-0 block border-none bg-transparent outline-none placeholdeer:text-sm" placeholder="Add a comment"/>
    <Separator/>
    
</div>

