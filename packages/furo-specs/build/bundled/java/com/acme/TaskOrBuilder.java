// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: com.acme.api.proto

package com.acme;

public interface TaskOrBuilder extends
    // @@protoc_insertion_point(interface_extends:com.acme.api.Task)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Short task description
   * </pre>
   *
   * <code>string description = 3;</code>
   */
  java.lang.String getDescription();
  /**
   * <pre>
   * Short task description
   * </pre>
   *
   * <code>string description = 3;</code>
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <pre>
   * Localized String representation of a task
   * </pre>
   *
   * <code>string display_name = 2;</code>
   */
  java.lang.String getDisplayName();
  /**
   * <pre>
   * Localized String representation of a task
   * </pre>
   *
   * <code>string display_name = 2;</code>
   */
  com.google.protobuf.ByteString
      getDisplayNameBytes();

  /**
   * <pre>
   * Estimated time in days
   * </pre>
   *
   * <code>int32 estimated_time = 4;</code>
   */
  int getEstimatedTime();

  /**
   * <pre>
   * Identity of a task
   * </pre>
   *
   * <code>string id = 1;</code>
   */
  java.lang.String getId();
  /**
   * <pre>
   * Identity of a task
   * </pre>
   *
   * <code>string id = 1;</code>
   */
  com.google.protobuf.ByteString
      getIdBytes();

  /**
   * <pre>
   * Owner of a task
   * </pre>
   *
   * <code>.furo.Reference owner = 5;</code>
   */
  boolean hasOwner();
  /**
   * <pre>
   * Owner of a task
   * </pre>
   *
   * <code>.furo.Reference owner = 5;</code>
   */
  furo.ReferenceOuterClass.Reference getOwner();
  /**
   * <pre>
   * Owner of a task
   * </pre>
   *
   * <code>.furo.Reference owner = 5;</code>
   */
  furo.ReferenceOuterClass.ReferenceOrBuilder getOwnerOrBuilder();

  /**
   * <pre>
   * List of subtasks
   * </pre>
   *
   * <code>repeated .com.acme.api.Task subtasks = 6;</code>
   */
  java.util.List<com.acme.Task> 
      getSubtasksList();
  /**
   * <pre>
   * List of subtasks
   * </pre>
   *
   * <code>repeated .com.acme.api.Task subtasks = 6;</code>
   */
  com.acme.Task getSubtasks(int index);
  /**
   * <pre>
   * List of subtasks
   * </pre>
   *
   * <code>repeated .com.acme.api.Task subtasks = 6;</code>
   */
  int getSubtasksCount();
  /**
   * <pre>
   * List of subtasks
   * </pre>
   *
   * <code>repeated .com.acme.api.Task subtasks = 6;</code>
   */
  java.util.List<? extends com.acme.TaskOrBuilder> 
      getSubtasksOrBuilderList();
  /**
   * <pre>
   * List of subtasks
   * </pre>
   *
   * <code>repeated .com.acme.api.Task subtasks = 6;</code>
   */
  com.acme.TaskOrBuilder getSubtasksOrBuilder(
      int index);
}
