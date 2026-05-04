import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modal, Button, Text, Page, ListTile, Header } from '../factory';
import { useTheme } from '../factory/ThemeContext';

export const ModalScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [basicOpen, setBasicOpen] = useState(false);
  const [withFooterOpen, setWithFooterOpen] = useState(false);
  const [withDescriptionOpen, setWithDescriptionOpen] = useState(false);

  return (
    <Page
      header={
        <Header 
          title="Modal" 
          onBackPress={() => navigation.goBack()} 
        />
      }
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="h2" style={styles.sectionTitle}>Examples</Text>
        
        <ListTile
          title="Basic Modal"
          subtitle="Simple modal with children content"
          onPress={() => setBasicOpen(true)}
        />

        <ListTile
          title="With Description"
          subtitle="Modal with title and description"
          onPress={() => setWithDescriptionOpen(true)}
        />

        <ListTile
          title="With Footer"
          subtitle="Modal with action buttons in footer"
          onPress={() => setWithFooterOpen(true)}
        />

        {/* Basic Modal */}
        <Modal
          isOpen={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Basic Modal"
        >
          <View style={styles.modalContent}>
            <Text>This is a basic modal with some text content.</Text>
            <Button 
              title="Close" 
              onPress={() => setBasicOpen(false)} 
              style={{ marginTop: 20 }}
            />
          </View>
        </Modal>

        {/* Modal with Description */}
        <Modal
          isOpen={withDescriptionOpen}
          onClose={() => setWithDescriptionOpen(false)}
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
        >
          <View style={styles.modalContent}>
             <Text color={colors.muted}>Additional information can go here.</Text>
          </View>
        </Modal>

        {/* Modal with Footer */}
        <Modal
          isOpen={withFooterOpen}
          onClose={() => setWithFooterOpen(false)}
          title="Save Changes"
          description="You have unsaved changes. Do you want to save them before leaving?"
          footer={
            <>
              <Button 
                title="Cancel" 
                variant="outline" 
                onPress={() => setWithFooterOpen(false)} 
              />
              <Button 
                title="Save" 
                onPress={() => setWithFooterOpen(false)} 
              />
            </>
          }

        >
          <View style={styles.modalContent}>
            <Text>Your changes will be synced to all devices.</Text>
          </View>
        </Modal>

      </ScrollView>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    marginTop: 8,
  },
  modalContent: {
    paddingVertical: 8,
  },
});
