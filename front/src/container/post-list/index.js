import Title from '../../component/title';
import Grid from '../../component/grid';
import Box from '../../component/box';
import PostCreate from '../../container/post-create';


export default function Container() {
    const getData =() => {};
    return (
        <Grid>
            <Box>
                <Grid>
                    <Title>Home</Title>
                    <PostCreate 
                    onCreate={getData}
                    placeholder="What's happening?"
                    button="Post"
                    />
                </Grid>
            </Box>
        </Grid>
    );
}