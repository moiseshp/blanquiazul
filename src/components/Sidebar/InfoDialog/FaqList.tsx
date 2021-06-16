import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Paper,
} from '@material-ui/core'
import faqs from './faqs'

const FaqList = () => {
  return (
    <List disablePadding>
      {faqs.map((faq: any) => (
        <Box mb={2} key={faq.user}>
          <Paper variant="outlined">
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={faq.user} src={faq.source} />
              </ListItemAvatar>
              <ListItemText
                primary={<Box fontWeight="fontWeightSemiBold">{faq.question}</Box>}
                secondary={
                  <Box
                    component="span"
                    color="secondary"
                  >
                    <Link 
                      color="secondary"
                      href={`https://twitter.com/${faq.user}`}
                      target="_blank"
                    >
                      @{faq.user}
                    </Link> — {faq.answer}.
                  </Box>
                }
              />
            </ListItem>
          </Paper>
        </Box>
      ))}
    </List>
  )
}

export default FaqList
