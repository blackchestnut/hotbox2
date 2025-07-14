<script setup>
import { createError } from "h3";

throw createError({
  statusCode: 500,
});
</script>
